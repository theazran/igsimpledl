const a = require('axios')
const q = require('qs')
const log = console.log;

async function shortUrl(url) {
  const result = await require("tinyurl").shorten(url);
  return result
}

async function ig(url) {
  return new Promise(async function(resolve, reject) {
    try {
      const data = q.stringify({
        'url': url,
        'locale': 'id'
      })
      const o = {
        method: 'POST',
        url: 'https://downloadgram.org/video-downloader.php',
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
        },
        data
      };
      await a(o)
        .then(async function(res) {
          const data = res.data;
          const ownAPI = '@theazran_'
          const url = await shortUrl(data.split('<br>')[1].split(' rel="noopener noreferrer" href="')[1].split('"')[0]);
          resolve({
            result: {
              ownAPI,
              url
            }
          })
        })
    } catch (e) {
      log('Harap hubungi admin');
      reject(e);
    }
  })
}

module.exports = ig
