
可进行多选，带折叠收起和展开更多功能，常用于对列表进行筛选。


## 基础样例


结合 `Tag` 的 `TagSelect` 组件，方便的应用于筛选类目的业务场景中。

```jsx
import TagSelect from '@/components/TagSelect';

function handleFormSubmit(checkedValue) {
  console.log(checkedValue);
}

ReactDOM.render(
  <TagSelect onChange={handleFormSubmit}>
    <TagSelect.Option value="cat1">类目一</TagSelect.Option>
    <TagSelect.Option value="cat2">类目二</TagSelect.Option>
    <TagSelect.Option value="cat3">类目三</TagSelect.Option>
    <TagSelect.Option value="cat4">类目四</TagSelect.Option>
    <TagSelect.Option value="cat5">类目五</TagSelect.Option>
    <TagSelect.Option value="cat6">类目六</TagSelect.Option>
  </TagSelect>,
  mountNode
);
```




## 可展开和收起


使用 `expandable` 属性，让标签组可以收起，避免过高。

```jsx
import TagSelect from '@/components/TagSelect';

function handleFormSubmit(checkedValue) {
  console.log(checkedValue);
}

ReactDOM.render(
  <TagSelect onChange={handleFormSubmit} expandable>
    <TagSelect.Option value="cat1">类目一</TagSelect.Option>
    <TagSelect.Option value="cat2">类目二</TagSelect.Option>
    <TagSelect.Option value="cat3">类目三</TagSelect.Option>
    <TagSelect.Option value="cat4">类目四</TagSelect.Option>
    <TagSelect.Option value="cat5">类目五</TagSelect.Option>
    <TagSelect.Option value="cat6">类目六</TagSelect.Option>
    <TagSelect.Option value="cat7">类目七</TagSelect.Option>
    <TagSelect.Option value="cat8">类目八</TagSelect.Option>
    <TagSelect.Option value="cat9">类目九</TagSelect.Option>
    <TagSelect.Option value="cat10">类目十</TagSelect.Option>
    <TagSelect.Option value="cat11">类目十一</TagSelect.Option>
    <TagSelect.Option value="cat12">类目十二</TagSelect.Option>
  </TagSelect>,
  mountNode
);
```



## 受控模式

结合 `Tag` 的 `TagSelect` 组件，方便的应用于筛选类目的业务场景中。

```jsx
import { Button } from 'antd';
import TagSelect from '@/components/TagSelect';

class Demo extends React.Component {
  state = {
    value: ['cat1'],
  };
  handleFormSubmit = value => {
    this.setState({
      value,
    });
  };
  checkAll = () => {
    this.setState({
      value: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'],
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.checkAll}>全部</Button>
        <div
          style={{
            padding: 16,
          }}
        >
          <TagSelect hideCheckAll={true} value={this.state.value} onChange={this.handleFormSubmit}>
            <TagSelect.Option value="cat1">类目一</TagSelect.Option>
            <TagSelect.Option value="cat2">类目二</TagSelect.Option>
            <TagSelect.Option value="cat3">类目三</TagSelect.Option>
            <TagSelect.Option value="cat4">类目四</TagSelect.Option>
            <TagSelect.Option value="cat5">类目五</TagSelect.Option>
            <TagSelect.Option value="cat6">类目六</TagSelect.Option>
          </TagSelect>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```


## API

### TagSelect

| 参数         | 说明                      | 类型                  | 默认值 |
| ------------ | ------------------------- | --------------------- | ------ |
| value        | 选中的项                  | string[] \| number[]  |        |
| defaultValue | 默认选中的项              | string[] \| number[]  |        |
| onChange     | 标签选择的回调函数        | Function(checkedTags) |        |
| expandable   | 是否展示 `展开/收起` 按钮 | Boolean               | false  |
| expand       | 默认 `展开/收起`  状态    | Boolean               | false  |
| hideCheckAll | 隐藏 `全部` 按钮          | Boolean               | false  |

### TagSelectOption

| 参数     | 说明           | 类型                | 默认值 |
| -------- | -------------- | ------------------- | ------ |
| value    | TagSelect 的值 | string\| number     | -      |
| children | tag 的内容     | string \| ReactNode | -      |



