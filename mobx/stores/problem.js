import { observable, action, computed, runInAction } from 'mobx';
import axios from 'axios';

export default class ProblemsStore {
  @observable list = []; // 메인문제 배열
  @observable relatedList = []; // 유사문제 배열
  @observable clickedId = ''; // 클릭한 문제 id
  @observable clickedIndex = ''; // 클릭한 문제 index

  @action
  getLists = async () => {
        const res = await axios.get('http://localhost:3000/problems');
        console.log('res.data', res.data)
        runInAction(() => {
          this.list = res.data;
        });
  };

  @action
  putRelatedLists = async (index) => {
    const res = await axios.get('http://localhost:3000/problems/similar/');
    runInAction(() => {
      this.relatedList = res.data;
    }); 
    const clickedItem = this.list[index].id; // 유사문제를 '클릭한 문제' id 구하기
    this.clickedId = clickedItem;
    this.clickedIndex= index; // 유사문제를 '클릭한 문제' index 는 클릭한 i값으로 세팅
    console.log('유사문제 클릭',this.clickedIndex)
  }

  @action
  onRemoveItem = (index) => {
    const clickedItem = this.list[index];
    this.list.remove(clickedItem); // '클릭한 문제' 삭제하면 메인문제 배열에서 삭제 
    this.relatedList = []; // '클릭한 문제' 삭제하면 유사문제 배열 초기화
    this.clickedId = '';
    this.clickedIndex = '';
  }

  @action
  onAddItem = (index) => {
    const clickedItem = this.relatedList[index];
    this.list.splice(this.clickedIndex+1, 0, clickedItem); // '클릭한 문제' 뒤에 추가를 누른 유사문제 삽입
    this.relatedList.remove(clickedItem); // 추가를 누른 유사문제는 유사문제 배열에서 삭제
    return;
  }

  @action
  onSwitchItem = (index) => {
    const clickedItem = this.relatedList[index];
    const clickedMainItem = this.list[this.clickedIndex];
    this.list.splice(this.clickedIndex, 0, clickedItem); // '클릭한 문제' 뒤에 '추가를 누른 유사문제' 삽입
    this.relatedList.remove(clickedItem); // 교체를 누른 유사문제는 유사문제 배열에서 삭제
    this.list.remove(clickedMainItem); // 메인문제는 메인문제 배열에서 삭제
    this.relatedList.splice(index, 0, clickedMainItem); // '추가를 누른 유사문제' 뒤에 '클릭한 문제' 삽입
    this.clickedId = clickedMainItem;
    return;
  }
}