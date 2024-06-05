var posts=["2024/01/29/hello-world/","2024/06/05/RL/MDP/","2024/01/29/算法/数据结构/","2024/01/29/算法/leetcode/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };