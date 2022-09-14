class Storage {
    get(key) {
      this.key = key;
  
      const storage = localStorage.getItem(this.key);
  
      return storage || '';
    }
    check(key) {
      let value = this.get(key);
      if (value && value !== '{}') {
        return true;
      } else {
        return false;
      }
    }
    delete(key) {
      this.key = key;
      localStorage.removeItem(this.key);
  
      return true;
    }
  
    save(key, value) {
      this.key = key;
      this.value = value;
  
      localStorage.setItem(key, value);
  
      return true;
    }
  }
  
  export default Storage;
  