import "./searchBar.css";
export const SearchBar = () => {
    return (
        <form class="search-bar">
            <icon class="fa fa-search"></icon>
            <input class="search-text" type="text" placeholder="Tìm kiếm sản phẩm"/>
            <div class="vertical-rule" style={{margin:"0"}}></div>
            <button class="search-btn" type="submit">Tìm kiếm</button>
        </form>
    )
}