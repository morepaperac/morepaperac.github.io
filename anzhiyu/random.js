var posts=["2024/06/07/RL/TabularMethod/","2024/07/04/算法/二叉树/","2024/06/05/RL/MDP/","2024/01/29/算法/数组总结/","2024/07/03/算法/双指针/","2024/07/04/算法/贪心/","2024/06/06/算法/链表总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };