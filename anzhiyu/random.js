var posts=["2024/06/05/RL/MDP/","2024/01/29/算法/数组总结/","2024/06/06/算法/链表总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };