import { header } from "../components/header/header.js";
header();

import { rating } from "../components/rating/rating.js";
rating();

import { tabs } from "../components/tabs/tabs.js";
tabs();

import { priceRange } from "../components/price-range/price-range.js";
priceRange();

import { offer } from "../blocks/offer/offer.js";
offer();

import { comments } from "../blocks/comments/comments.js";
comments();

import { bestseller } from "../blocks/bestseller/bestseller.js";
bestseller();

import { news } from "../blocks/news/news.js";
news();

import { productCategory } from "../blocks/product-category/product-category.js";
productCategory();

import { product } from "../blocks/product/product.js";
product()

import { similarProducts } from "../blocks/similar-products/similar-products.js";
similarProducts()

import { basket } from "../blocks/basket/basket.js";
basket()

import { useDynamicAdapt } from "./libraries/dynamicAdapt/dynamicAdapt.js";
useDynamicAdapt();

tippy("[data-tippy-content]");