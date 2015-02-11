class AppViewModel {
    constructor() {
        this.defaultAnimeName = 'Naruto';
    }
}

ko.applyBindings(new AppViewModel());