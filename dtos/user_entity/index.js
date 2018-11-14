module.exports = {
  Add: class Add {
    constructor(userNo, password, name, gender, status, company, department, job, directorNo, directorName, email) {
      this.userNo = userNo;
      this.password = password;
      this.name = name;
      this.gender = gender;
      this.status = status;
      this.company = company;
      this.department = department;
      this.job = job;
      this.directorNo = directorNo;
      this.directorName = directorName;
      this.email = email;
    }
  },
  show: class show {
    constructor(id, userNo, password, name, gender, status, company, department, job, directorNo, directorName, email) {
      this.userId = id;
      this.userNo = userNo;
      this.password = password;
      this.name = name;
      this.gender = gender;
      this.status = status;
      this.company = company;
      this.department = department;
      this.job = job;
      this.directorNo = directorNo;
      this.directorName = directorName;
      this.email = email;
    }
  }
}
