const fs = require('fs');

var d = { posts: [] }
var { posts } = d
for (var i=0; i<5; i++) {
    posts.push({
        key: i,
        user: "Peter " + i,
        text: "test post " + i,
        timeShow: 0,
        timeHide: 20 + i*10000
    });
}

for (var i=5; i<10; i++) {
    posts.push({
        key: i,
        user: "Peter " + i,
        text: "test post " + i,
        timeShow: 40000 + (i-5)*10000,
        timeHide: 40000 + (i-5)*10 + 60000
    });
}

fs.writeFileSync('../src/posts.json', JSON.stringify(d));