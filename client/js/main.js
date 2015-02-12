class AppViewModel {
    constructor() {
        this.animeName = ko.observable();
        this.results = ko.observable();
    }
    loadSearchResults() {
        return ajax("/search?", "GET", {name: this.animeName()}).then(res => {
            this.renderSearchResults(res);
        });
    }

    renderSearchResults(response) {
        let data = JSON.parse(response);
        this.items = data.map(el => new SearchResult(el.title, el.url));
        console.log(this.items);
    }
}

class SearchResult {
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
}

function ajax(url, method = "GET", data = null){
    var xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = reject;
        if(method.toUpperCase() === "GET") url += "?" + urlEncodeObject(data);
        xhr.open(method, url);
        xhr.send(data);
    });

    function urlEncodeObject(obj) {
        return Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');
    }
}

ko.applyBindings(new AppViewModel());