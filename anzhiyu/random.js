var posts=["2024/01/29/算法/数组总结/","2024/06/07/RL/TabularMethod/","2024/06/06/算法/链表总结/","2024/06/05/RL/MDP/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };