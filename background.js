function getGridHTML() {
  //return 
}
function toggleGrid() {
  const gridHTML =`
<div class="container-fluid test-grid">
<div class="row">
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
    <div class="col-1">
    <div></div>
    </div>
</div>
</div>
<style>
.test-grid {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    opacity: 0.5;
	padding: 0;
}
.test-grid  [class*="col-"] div{
    height: 100vh;
    background: red;
}
</style>
`;

const htmlGrid = document.getElementsByClassName('test-grid');

  if( htmlGrid.length ) {
    htmlGrid[0].remove();
  } else {
   document.body.innerHTML += gridHTML ;
  }
}


chrome.action.onClicked.addListener((tab) => {

  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: toggleGrid
    });
  }

});