/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drawer-work.ts":
/*!****************************!*\
  !*** ./src/drawer-work.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DrawCanvasWorker: () => (/* binding */ DrawCanvasWorker)\n/* harmony export */ });\nvar DrawCanvasWorker = /** @class */ (function () {\n    function DrawCanvasWorker(ctx) {\n        this.ctx = ctx;\n    }\n    DrawCanvasWorker.prototype.clearCanvas = function () {\n        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n    };\n    DrawCanvasWorker.prototype.drawPoint = function (point, color, label) {\n        this.ctx.fillStyle = color;\n        this.ctx.beginPath();\n        this.ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);\n        this.ctx.fill();\n        this.ctx.fillStyle = \"black\";\n        this.ctx.fillText(label, point.x + 10, point.y - 10);\n    };\n    DrawCanvasWorker.prototype.drawLine = function (start, end, color) {\n        this.ctx.strokeStyle = color;\n        this.ctx.beginPath();\n        this.ctx.moveTo(start.x, start.y);\n        this.ctx.lineTo(end.x, end.y);\n        this.ctx.stroke();\n    };\n    return DrawCanvasWorker;\n}());\n\n\n\n//# sourceURL=webpack://canvas/./src/drawer-work.ts?");

/***/ }),

/***/ "./src/tree-build.ts":
/*!***************************!*\
  !*** ./src/tree-build.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TreeBuilder: () => (/* binding */ TreeBuilder)\n/* harmony export */ });\n/* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-node */ \"./src/tree-node.ts\");\n\nvar TreeBuilder = /** @class */ (function () {\n    function TreeBuilder() {\n    }\n    TreeBuilder.buildTreePrePost = function (preorder, postorder) {\n        if (!preorder.length || !postorder.length)\n            return null;\n        // Root is the first node in preorder\n        var root = new _tree_node__WEBPACK_IMPORTED_MODULE_0__.TreeNode(preorder[0]);\n        // If there's only one node, return it\n        if (preorder.length === 1)\n            return root;\n        // The second node in preorder is the left child\n        var leftSubtreeRoot = preorder[1];\n        // Find the left subtree size in postorder\n        var leftSubtreeSize = postorder.indexOf(leftSubtreeRoot) + 1;\n        // Split preorder and postorder into left and right subtrees\n        var leftPreorder = preorder.slice(1, leftSubtreeSize + 1);\n        var rightPreorder = preorder.slice(leftSubtreeSize + 1);\n        var leftPostorder = postorder.slice(0, leftSubtreeSize);\n        var rightPostorder = postorder.slice(leftSubtreeSize, -1); // Remove last element (root)\n        // Recursively build left and right subtrees\n        root.left = TreeBuilder.buildTreePrePost(leftPreorder, leftPostorder);\n        root.right = TreeBuilder.buildTreePrePost(rightPreorder, rightPostorder);\n        return root;\n    };\n    TreeBuilder.buildTreePreIn = function (preorder, inorder) {\n        if (!preorder.length || !inorder.length)\n            return null;\n        // Root is always the first node in preorder\n        var rootVal = preorder[0];\n        var root = new _tree_node__WEBPACK_IMPORTED_MODULE_0__.TreeNode(rootVal);\n        // Find index of root in inorder list\n        var rootIndex = inorder.indexOf(rootVal);\n        // Left subtree elements in inorder\n        var leftInorder = inorder.slice(0, rootIndex);\n        // Right subtree elements in inorder\n        var rightInorder = inorder.slice(rootIndex + 1);\n        // Left subtree elements in preorder\n        var leftPreorder = preorder.slice(1, leftInorder.length + 1);\n        // Right subtree elements in preorder\n        var rightPreorder = preorder.slice(leftInorder.length + 1);\n        // Recursively construct left and right subtrees\n        root.left = TreeBuilder.buildTreePreIn(leftPreorder, leftInorder);\n        root.right = TreeBuilder.buildTreePreIn(rightPreorder, rightInorder);\n        return root;\n    };\n    TreeBuilder.buildTreePostIn = function (postorder, inorder) {\n        if (!postorder.length || !inorder.length)\n            return null;\n        // Root is always the last node in postorder\n        var rootVal = postorder.pop(); // Remove last element\n        var root = new _tree_node__WEBPACK_IMPORTED_MODULE_0__.TreeNode(rootVal);\n        // Find index of root in inorder list\n        var rootIndex = inorder.indexOf(rootVal);\n        // Right subtree elements in inorder (must build right first due to pop order)\n        var rightInorder = inorder.slice(rootIndex + 1);\n        // Left subtree elements in inorder\n        var leftInorder = inorder.slice(0, rootIndex);\n        // Recursively construct right and left subtrees\n        // Important: Process right subtree first since we are using `pop()`\n        root.right = TreeBuilder.buildTreePostIn(postorder, rightInorder);\n        root.left = TreeBuilder.buildTreePostIn(postorder, leftInorder);\n        return root;\n    };\n    return TreeBuilder;\n}());\n\n\n\n//# sourceURL=webpack://canvas/./src/tree-build.ts?");

/***/ }),

/***/ "./src/tree-index.ts":
/*!***************************!*\
  !*** ./src/tree-index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawer_work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer-work */ \"./src/drawer-work.ts\");\n/* harmony import */ var _tree_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-build */ \"./src/tree-build.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\nvar canvas = document.getElementById(\"myCanvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar preOrderEl = document.getElementById(\"pre-order\");\nvar postOrderEl = document.getElementById(\"post-order\");\nvar inOrderEl = document.getElementById(\"in-order\");\nvar submitBtn = document.getElementById(\"submit\");\nvar drawer = new _drawer_work__WEBPACK_IMPORTED_MODULE_0__.DrawCanvasWorker(ctx);\nsubmitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    buildTreeNode();\n});\nfunction buildTreeNode() {\n    drawer.clearCanvas();\n    var preorder = preOrderEl === null || preOrderEl === void 0 ? void 0 : preOrderEl.value.split('');\n    var postorder = postOrderEl === null || postOrderEl === void 0 ? void 0 : postOrderEl.value.split('');\n    var inorder = inOrderEl === null || inOrderEl === void 0 ? void 0 : inOrderEl.value.split('');\n    if (preOrderEl.value && postOrderEl.value) {\n        var root = _tree_build__WEBPACK_IMPORTED_MODULE_1__.TreeBuilder.buildTreePrePost(preorder, postorder);\n        levelOrderTraversal(root, __assign({}, rootPos), 1, 1);\n    }\n    else if (preOrderEl.value && inOrderEl.value) {\n        var root = _tree_build__WEBPACK_IMPORTED_MODULE_1__.TreeBuilder.buildTreePreIn(preorder, inorder);\n        levelOrderTraversal(root, __assign({}, rootPos), 1, 1);\n    }\n    else if (postOrderEl.value && inOrderEl.value) {\n        var root = _tree_build__WEBPACK_IMPORTED_MODULE_1__.TreeBuilder.buildTreePostIn(postorder, inorder);\n        levelOrderTraversal(root, __assign({}, rootPos), 1, 1);\n    }\n}\n// Function to print tree in level order for verification\nvar rootPos = {\n    x: 400,\n    y: 50\n};\nvar distance = 100;\nfunction levelOrderTraversal(root, rootPos, direction, level) {\n    var parentPos = __assign({}, rootPos);\n    rootPos.x = rootPos.x - (direction * distance) / level;\n    rootPos.y = rootPos.y + distance;\n    if (!root)\n        return;\n    drawer.drawPoint(rootPos, 'black', root.val);\n    console.log({ level: level });\n    if (level != 1)\n        drawer.drawLine(parentPos, rootPos, 'blue');\n    levelOrderTraversal(root.left, __assign({}, rootPos), 1, level + 1);\n    levelOrderTraversal(root.right, __assign({}, rootPos), -1, level + 1);\n}\n\n\n//# sourceURL=webpack://canvas/./src/tree-index.ts?");

/***/ }),

/***/ "./src/tree-node.ts":
/*!**************************!*\
  !*** ./src/tree-node.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TreeNode: () => (/* binding */ TreeNode)\n/* harmony export */ });\nvar TreeNode = /** @class */ (function () {\n    function TreeNode(val) {\n        this.val = val;\n        this.left = null;\n        this.right = null;\n    }\n    return TreeNode;\n}());\n\n\n\n//# sourceURL=webpack://canvas/./src/tree-node.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tree-index.ts");
/******/ 	
/******/ })()
;