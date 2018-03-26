Page({
  data: {
    list: [
      { content:'', complete: false ,disable:true}
    ],
    filterList: [{ content: '', complete: false, disable: true }],
  },
  inputed:function(e){
    var cur = e.target,
        id= cur.id,
        value=e.detail.value,
        temp=this.data.list,
        com = 'list[' + id + '].content',
        dis = 'list[' + id + '].disable';
    if (id == temp.length - 1) {
      temp.push({ content: '', complete: false, disable: true });
      this.setData({
        list: temp
      });
    } else {
      if (value.length == 0) {
        temp.splice(id, 1);
        temp.pop();
        this.setData({
          list: temp
        });
        this.setData({
          filterList: this.data.list
        });
      }
    }
    this.setData({
      [com]: value
    })

    if (value.length != 0) {
      this.setData({
        [dis]: false
      });
    } else {
      this.setData({
        [dis]: true
      })
    }
    this.setData({
      filterList: this.data.list
    });
  },
  checked:function(e){
    var newList=[],
        temp = this.data.list,
        temp1 = e.detail.value;
    for (var i = 0, len = temp.length;i<len;i++){
      var com = 'list[' + i + '].complete';
      this.setData({
        [com]:false
      })
      for (var j = 0, leng = temp1.length;j<leng;j++){
        var index=temp1[j],
            com1 = 'list[' + index+ '].complete';
        this.setData({
          [com1]: true
        })
      }
    }
    this.setData({
      filterList: this.data.list
    });
  },
  actived:function(e){
    var id = e ? e.target.id:0,
        newList=[],
        temp = this.data.filterList;
    console.log(this.data.list);
    console.log(this.data.filterList);
    switch(id){
      case '0':
        this.setData({
          list: this.data.filterList
        });
        break;
      case '1':
        for (var i = 0; i < temp.length;i++){
          if (temp[i].complete) {
            newList.push(this.data.filterList[i]);
          }
        }
        this.setData({
          list: newList
        })
        break;
      case '2':
        for (var i = 0; i < temp.length; i++) {
          if (!temp[i].complete) {
            if(i!=temp.length-1){
              newList.push(temp[i]);
            }
          }
        }
        this.setData({
          list: newList
        })
        break;
      default:
        break;
    }
  },
  clear:function(){
    var temp = [{ content: '', complete: false, disable: true }];
    this.setData({
      filterList: [],
      list: temp,
      filterList:temp
    });
  },
  onLoad: function (options) {
    
  },
  onReady: function () {
    console.log('im onready')
  },
  onShow: function () {
    console.log('im onshow')
  },
  onHide: function () {
    console.log('im onhide')
  },
  onUnload: function () {
    console.log('im onunload')
  }
});
