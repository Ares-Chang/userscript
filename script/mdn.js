// ==UserScript==
// @name         自动跳转 MDN 中文
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  点击 MDN 链接，自动跳转至中文路由
// @author       Ares-Chang
// @match        https://developer.mozilla.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==
(function () {
  'use strict'

  const button = document.querySelector('#languages-switcher-button')

  const url = window.location.href

  if (!url.includes('/en-US/', 12))
    return

  const list = url.split('/en-US/')
  const str = `${list[0]}/zh-CN/${list[1] || ''}`

  window.location.replace(str)
})()
