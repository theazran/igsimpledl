# igsimpledl
Instagram simple API

Only available for download single post, reels.
If multiple posts, only the main one is downloaded.

```bash
npm install igsimpledl
```
# Usages: 
```javascript
const ig = require("igsimpledl");
ig("https://www.instagram.com/p/CXCnrUFhsZS/")
  .then(data => {
    console.log(data)
})
```
# Result:
```json
{
  "result": { 
    "ownAPI": "@theazran_", 
    "url": "https://tinyurl.com/2fndqq8v" 
  }
}
```

### Contact Me:
> * Facebook: [M ASRAN](https://www.facebook.com/theazran)

> * Instagram: [M ASRAN](https://instagram.com/theazran_)