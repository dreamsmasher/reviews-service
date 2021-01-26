"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}
_mongoose["default"].Promise = require('bluebird');

_mongoose["default"].connect('mongodb://localhost:27017/jtwenl', { useNewUrlParser: true, useUnifiedTopology: true });

/**@module Review */var

Schema = _mongoose["default"].Schema;

var ReviewSchema = {
  title: { type: String, required: true },
  user: { type: String, required: true },
  date: { type: Date, required: true },
  likes: { type: Number, required: true },
  body: { type: String, required: true },
  stars: { type: Number, required: true },
  thumbnail: { type: String },
  recommend: { type: Boolean, required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  metrics: {
    difficulty: Number,
    value: Number,
    quality: Number,
    appearance: Number,
    works: Number } };



/** Review document for our db
 * @class Review
 * @prop {string} title - review title
 * @prop {string} user - username
 * @prop {date} date - review date
 * @prop {number} likes - how many updoots it got
 * @prop {string} body - review text
 * @prop {number} stars - 1-5
 * @prop {boolean} recommend - whether a user would recommend this product
 * @prop {{difficulty: number, value: number, quality: number, appearance: number, works: number}} metrics - these range from 1-5 in each category
 *
 */
var Review = _mongoose["default"].model('Review', ReviewSchema);var _default =

Review;exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9kYi9SZXZpZXcuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJQcm9taXNlIiwicmVxdWlyZSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJTY2hlbWEiLCJSZXZpZXdTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVzZXIiLCJkYXRlIiwiRGF0ZSIsImxpa2VzIiwiTnVtYmVyIiwiYm9keSIsInN0YXJzIiwidGh1bWJuYWlsIiwicmVjb21tZW5kIiwiQm9vbGVhbiIsInByb2R1Y3QiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwibWV0cmljcyIsImRpZmZpY3VsdHkiLCJ2YWx1ZSIsInF1YWxpdHkiLCJhcHBlYXJhbmNlIiwid29ya3MiLCJSZXZpZXciLCJtb2RlbCJdLCJtYXBwaW5ncyI6InVHQUFBLDREO0FBQ0FBLHFCQUFTQyxPQUFULEdBQW1CQyxPQUFPLENBQUMsVUFBRCxDQUExQjs7QUFFQUYscUJBQVNHLE9BQVQsQ0FBaUIsa0NBQWpCLEVBQXFELEVBQUNDLGVBQWUsRUFBRSxJQUFsQixFQUF3QkMsa0JBQWtCLEVBQUUsSUFBNUMsRUFBckQ7O0FBRUEsb0I7O0FBRVFDLE0sR0FBV04sb0IsQ0FBWE0sTTs7QUFFUixJQUFNQyxZQUFZLEdBQUc7QUFDakJDLEVBQUFBLEtBQUssRUFBRSxFQUFFQyxJQUFJLEVBQUVDLE1BQVIsRUFBZ0JDLFFBQVEsRUFBRSxJQUExQixFQURVO0FBRWpCQyxFQUFBQSxJQUFJLEVBQUUsRUFBRUgsSUFBSSxFQUFFQyxNQUFSLEVBQWdCQyxRQUFRLEVBQUUsSUFBMUIsRUFGVztBQUdqQkUsRUFBQUEsSUFBSSxFQUFFLEVBQUVKLElBQUksRUFBRUssSUFBUixFQUFjSCxRQUFRLEVBQUUsSUFBeEIsRUFIVztBQUlqQkksRUFBQUEsS0FBSyxFQUFFLEVBQUVOLElBQUksRUFBRU8sTUFBUixFQUFnQkwsUUFBUSxFQUFFLElBQTFCLEVBSlU7QUFLakJNLEVBQUFBLElBQUksRUFBRSxFQUFFUixJQUFJLEVBQUVDLE1BQVIsRUFBZ0JDLFFBQVEsRUFBRSxJQUExQixFQUxXO0FBTWpCTyxFQUFBQSxLQUFLLEVBQUUsRUFBRVQsSUFBSSxFQUFFTyxNQUFSLEVBQWdCTCxRQUFRLEVBQUUsSUFBMUIsRUFOVTtBQU9qQlEsRUFBQUEsU0FBUyxFQUFFLEVBQUVWLElBQUksRUFBRUMsTUFBUixFQVBNO0FBUWpCVSxFQUFBQSxTQUFTLEVBQUUsRUFBRVgsSUFBSSxFQUFFWSxPQUFSLEVBQWlCVixRQUFRLEVBQUUsSUFBM0IsRUFSTTtBQVNqQlcsRUFBQUEsT0FBTyxFQUFFLEVBQUViLElBQUksRUFBRUgsTUFBTSxDQUFDaUIsS0FBUCxDQUFhQyxRQUFyQixFQUErQkMsR0FBRyxFQUFFLFNBQXBDLEVBVFE7QUFVakJDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxVQUFVLEVBQUVYLE1BRFA7QUFFTFksSUFBQUEsS0FBSyxFQUFFWixNQUZGO0FBR0xhLElBQUFBLE9BQU8sRUFBRWIsTUFISjtBQUlMYyxJQUFBQSxVQUFVLEVBQUVkLE1BSlA7QUFLTGUsSUFBQUEsS0FBSyxFQUFFZixNQUxGLEVBVlEsRUFBckI7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTWdCLE1BQU0sR0FBR2hDLHFCQUFTaUMsS0FBVCxDQUFlLFFBQWYsRUFBeUIxQixZQUF6QixDQUFmLEM7O0FBRWV5QixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbm1vbmdvb3NlLlByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuXG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2p0d2VubCcsIHt1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZX0pO1xuXG4vKipAbW9kdWxlIFJldmlldyAqL1xuXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG5cbmNvbnN0IFJldmlld1NjaGVtYSA9IHtcbiAgICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB9LFxuICAgIHVzZXI6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgfSxcbiAgICBkYXRlOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlLCB9LFxuICAgIGxpa2VzOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIH0sXG4gICAgYm9keTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB9LFxuICAgIHN0YXJzOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIH0sXG4gICAgdGh1bWJuYWlsOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHJlY29tbWVuZDogeyB0eXBlOiBCb29sZWFuLCByZXF1aXJlZDogdHJ1ZSwgfSxcbiAgICBwcm9kdWN0OiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnUHJvZHVjdCd9LFxuICAgIG1ldHJpY3M6IHtcbiAgICAgICAgZGlmZmljdWx0eTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogTnVtYmVyLFxuICAgICAgICBxdWFsaXR5OiBOdW1iZXIsXG4gICAgICAgIGFwcGVhcmFuY2U6IE51bWJlcixcbiAgICAgICAgd29ya3M6IE51bWJlcixcbiAgICB9XG59O1xuXG4vKiogUmV2aWV3IGRvY3VtZW50IGZvciBvdXIgZGJcbiAqIEBjbGFzcyBSZXZpZXdcbiAqIEBwcm9wIHtzdHJpbmd9IHRpdGxlIC0gcmV2aWV3IHRpdGxlXG4gKiBAcHJvcCB7c3RyaW5nfSB1c2VyIC0gdXNlcm5hbWVcbiAqIEBwcm9wIHtkYXRlfSBkYXRlIC0gcmV2aWV3IGRhdGVcbiAqIEBwcm9wIHtudW1iZXJ9IGxpa2VzIC0gaG93IG1hbnkgdXBkb290cyBpdCBnb3RcbiAqIEBwcm9wIHtzdHJpbmd9IGJvZHkgLSByZXZpZXcgdGV4dFxuICogQHByb3Age251bWJlcn0gc3RhcnMgLSAxLTVcbiAqIEBwcm9wIHtib29sZWFufSByZWNvbW1lbmQgLSB3aGV0aGVyIGEgdXNlciB3b3VsZCByZWNvbW1lbmQgdGhpcyBwcm9kdWN0XG4gKiBAcHJvcCB7e2RpZmZpY3VsdHk6IG51bWJlciwgdmFsdWU6IG51bWJlciwgcXVhbGl0eTogbnVtYmVyLCBhcHBlYXJhbmNlOiBudW1iZXIsIHdvcmtzOiBudW1iZXJ9fSBtZXRyaWNzIC0gdGhlc2UgcmFuZ2UgZnJvbSAxLTUgaW4gZWFjaCBjYXRlZ29yeVxuICpcbiAqL1xuY29uc3QgUmV2aWV3ID0gbW9uZ29vc2UubW9kZWwoJ1JldmlldycsIFJldmlld1NjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlldzsiXX0=