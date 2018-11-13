module.exports = {
    Verify: class Verify {
        constructor(data) {
            this.name = data.name;
            this.author = data.author;
            this.submiterNo = data.submiterNo;
            this.cover = data.cover;
            this.content = data.content;
            this.menuId = data.menuId;
        }
    },
    Add: class Add {
        constructor(name, author, submiterId, submiterNo, cover, content, isLatest, isIndexShow, sort, menuId) {
            this.name = name;
            this.author = author;
            this.submiterId = submiterId;
            this.submiterNo = submiterNo;
            this.cover = cover;
            this.content = content;
            this.isLatest = isLatest;
            this.isIndexShow = isIndexShow;
            this.sort = sort;
            this.menuId = menuId;
        }
    },
    Show: class Show {
        constructor(id, name, author, cover, content, isLatest, isIndexShow, sort) {
            this.id = id;
            this.name = name;
            this.author = author;
            this.cover = cover;
            this.content = content;
            this.isLatest = isLatest;
            this.isIndexShow = isIndexShow;
            this.sort = sort;
        }
    }
}