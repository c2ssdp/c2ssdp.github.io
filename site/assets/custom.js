document.addEventListener("DOMContentLoaded", function() {
    // 본문 내 외부 링크만 새 창에서 열리도록 설정
    document.querySelectorAll(".md-content a[href^='http']").forEach(function(link) {
        if (!link.href.includes(window.location.origin)) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });

    // 네비게이션(nav) 메뉴에서 외부 링크만 새 창에서 열리도록 설정
    document.querySelectorAll(".md-nav__link[href^='http']").forEach(function(link) {
        if (!link.href.includes(window.location.origin)) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });
});
