// ==UserScript==
// @name         自动跳转 MDN 中文
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  点击 MDN 链接，自动跳转至中文路由
// @author       Ares-Chang
// @match        https://developer.mozilla.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @link         https://github.com/Ares-Chang/tampermonkey
// @grant        none
// ==/UserScript==
;(function () {
  'use strict'

  const url = window.location.href

  if (url.includes('/zh-CN/')) return

  const language = document.querySelector('#languages-switcher-button')

  language.click() // 打开语言下拉菜单

  setTimeout(() => {
    const list = document.querySelectorAll('.languages-switcher-menu li')

    // 获取 list 中内容为 "中文" 的元素
    ;[...list].some(dom => {
      const judge = dom.innerText.includes('中文')
      if (judge) {
        dom.querySelector('a').click()
        return true
      }

      return false
    })

    language.click() // 关闭语言下拉菜单
  }, 0)
})()
