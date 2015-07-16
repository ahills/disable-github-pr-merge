function toggleMergeButton(element) {
  element.className = element.className.replace(/primary/g, 'disabled').replace(/danger/g, 'disabled').replace(/js-details-target/g, '');
  if (element.className.indexOf('disabled') < 0) {
    element.className += 'btn-disabled';
  }
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
          toggleMergeButton(element);
        });
      }
    });
  });

  observer.observe(target, config);
}

toggleMergeButton(document.querySelector(".merge-branch-action"));
observeMergeButton();
