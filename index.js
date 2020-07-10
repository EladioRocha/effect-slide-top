'use strict';

(function () {
    const CSS_SLIDE_EFFECT = 'transition move',
        CSS_DELETE_EFFECT = 'delete',
        SECTION_LAST_CHILD = 'div:nth-child(2)',
        SECTION_FIRST_CHILD = 'div:nth-child(1)',
        SLIDE_TIME = 2000

    let i = 1
    
    function removeSlide(slide) {
        slide.remove()
    }

    function addNewSlideInQueue() {
        document.querySelector('section').appendChild(createNewSlide())
    }

    function createNewSlide() {
        const tagDiv = document.createElement('div'),
            tagP = document.createElement('p'),
            textNode = document.createTextNode('Slide: ' + i++)

        tagP.appendChild(textNode)
        tagDiv.appendChild(tagP)
        return tagDiv
    }

    function removeCssClassAttribute(slide) {
        slide.removeAttribute('class')
    }

    function addCssClass(slide, cssClass) {
        slide.className += cssClass
    }

    function existMoreThanTwoSlides() {
        return document.querySelectorAll('div').length > 2
    }

    function updateSectionSlides() {
        const focusSlide = document.querySelector(SECTION_FIRST_CHILD)
        addCssClass(document.querySelector(SECTION_LAST_CHILD), CSS_SLIDE_EFFECT)
        addCssClass(focusSlide, `${CSS_SLIDE_EFFECT} ${CSS_DELETE_EFFECT}`)
        if(!existMoreThanTwoSlides()) {
            addNewSlideInQueue()
        }
    }

    function restartSectionSlides(e) {
        const elem = e.target
        if(elem.classList.contains('delete')) {
            removeSlide(elem)
        }
        removeCssClassAttribute(document.querySelector('div'))
    }

    function init() {
        // setInterval(updateSectionSlides, SLIDE_TIME)
        document.addEventListener('transitionend', restartSectionSlides)
    }

    init()
})()
