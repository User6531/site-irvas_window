function tabs({tabParentSelector, tabsSelector, tabsContentSelector, activeClassSelector}) {

    const tabsContent = document.querySelectorAll(tabsContentSelector),
        tabParent = document.querySelector(tabParentSelector),
        tabs = document.querySelectorAll(tabsSelector);
        
    hideTabsContent();
    showTabContent();

    tabParent.addEventListener('click', (e)=>{
        const target = e.target;

        if (target.classList.contains(tabsSelector.replace(/\./g, '')) || 
        target.parentNode.classList.contains(tabsSelector.replace(/\./g, ''))) {
            tabs.forEach((tab, key)=>{
                if (tab == target || tab == target.parentNode) {
                    hideTabsContent();
                    showTabContent(key);
                }
            }); 
        }
    });

    // show target tab Content
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';

        tabs[i].classList.add(activeClassSelector.replace(/\./g, ''));
        
    }

    // hide all tabs Content
    function hideTabsContent() {
        tabsContent.forEach(tabContent =>{
            tabContent.style.display = 'none';
        });

        tabs.forEach(tab=>{
            tab.classList.remove(activeClassSelector.replace(/\./g, ''));
        });
    }
}

export default tabs;
