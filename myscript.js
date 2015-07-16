function removeMergeButton(element) {
  element.parentNode.removeChild(element);
}

function observeMergeButton() {
  var target = document.querySelector('body');
  var config = {
    childList: true,
    subtree: true,
    characterData: true
  };

  var observer = new MutationObserver(function(mutations, self) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'characterData' || mutation.type === 'childList') {
        var elements = document.querySelectorAll('.merge-branch-action');
        Array.prototype.forEach.call(elements, function(element) {
          removeMergeButton(element);
        });
      }
    });
  });

  observer.observe(target, config);
}

removeMergeButton(document.querySelector(".merge-branch-action"));
observeMergeButton();
