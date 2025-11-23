// header.js
document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("global-header");
    if (!headerElement) return;

    // 現在のページファイル名を取得（index.html か admin.html か判定用）
    const path = window.location.pathname;
    const isMapPage = path.includes("admin.html");
    const isUploadPage = !isMapPage; // admin.html以外はアップロードページとみなす

    // ヘッダーのHTMLとCSS
    const headerHTML = `
        <style>
            /* 共通ヘッダーのデザイン */
            .app-header {
                background-color: #333;
                padding: 0;
                margin-bottom: 20px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            }
            .nav-tabs {
                display: flex;
                justify-content: center;
                list-style: none;
                margin: 0;
                padding: 0;
            }
            .nav-item {
                flex: 1;
                text-align: center;
                max-width: 200px;
            }
            .nav-link {
                display: block;
                padding: 15px 0;
                color: #ccc;
                text-decoration: none;
                font-weight: bold;
                transition: 0.3s;
                border-bottom: 3px solid transparent;
            }
            .nav-link:hover {
                background-color: #444;
                color: white;
            }
            /* アクティブ（現在地）のタブのデザイン */
            .nav-link.active {
                color: white;
                border-bottom: 3px solid #007bff; /* 青い線 */
                background-color: #222;
            }
        </style>

        <nav class="app-header">
            <ul class="nav-tabs">
                <li class="nav-item">
                    <a href="index.html" class="nav-link ${isUploadPage ? 'active' : ''}">
                        📷 現場報告
                    </a>
                </li>
                <li class="nav-item">
                    <a href="admin.html" class="nav-link ${isMapPage ? 'active' : ''}">
                        🗺️ 管理マップ
                    </a>
                </li>
            </ul>
        </nav>
    `;

    // 画面に流し込む
    headerElement.innerHTML = headerHTML;
});