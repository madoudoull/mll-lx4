(function() {
  'use strict';

  angular
    .module('mllLx4')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
