class AppViewModel {
    constructor() {
        this.animeName = ko.observable();
    }
    loadSearchResults() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '/search?' + urlEncodeObject({name: this.animeName()}));
        xhr.onload = () => { this.renderSearchResults(xhr.responseText) };
        xhr.send();
    }

    renderSearchResults(response) {

    }
}

function urlEncodeObject(obj) {
    return Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');
}

ko.applyBindings(new AppViewModel());