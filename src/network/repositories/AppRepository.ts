const url = 'http://www.reddit.com/r/pics/.json?jsonp='

class AppRepository {
    public getPics = async () => {
        return await fetch(url);
    };
}

const appRepository = new AppRepository();
export { appRepository as AppRepository };