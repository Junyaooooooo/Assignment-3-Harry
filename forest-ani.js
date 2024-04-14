// for forest animation
// event listener: scrolling
window.onscroll = function() {
    var scrollDistance = window.scrollY; // get scrolling dist
    var maxScrollDistance = document.body.scrollHeight - window.innerHeight; // 计算最大滚动距离
  
    // cal the perc of img moving
    var movePercentage = scrollDistance / maxScrollDistance;
  
    // get 2 imgs
    var forestLeft = document.querySelector('.forest-left');
    var forestRight = document.querySelector('.forest-right');
  
    // cal n set transformation properties
    // left-left, right-right, moving according to scrolling perc
    var leftTransformValue = -100 * movePercentage; 
    var rightTransformValue = 100 * movePercentage;
  
    forestLeft.style.transform = 'translateX(' + leftTransformValue + '%)';
    forestRight.style.transform = 'translateX(' + rightTransformValue + '%)';
  };