import { header } from "../components/header/header.js";
header();

import { rating } from "../components/rating/rating.js";
rating();

import { offer } from "../blocks/offer/offer.js";
offer();

import { comments } from "../blocks/comments/comments.js";
comments();

import { bestseller } from "../blocks/bestseller/bestseller.js";
bestseller();

import { news } from "../blocks/news/news.js";
news();

import { useDynamicAdapt } from "./libraries/dynamicAdapt/dynamicAdapt.js";
useDynamicAdapt();

tippy("[data-tippy-content]");