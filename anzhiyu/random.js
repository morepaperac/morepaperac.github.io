var posts=["2024/01/29/hello-world/","2024/01/29/算法/leetcode/","2024/01/29/算法/数据结构/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };