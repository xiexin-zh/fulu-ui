import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tag } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import './index.less';

const { CheckableTag } = Tag;

const TagSelectOption = ({ children, checked, onChange, value }) => (
  <CheckableTag
    checked={checked}
    key={value}
    onChange={(state) => onChange(value, state)}
  >
    {children}
  </CheckableTag>
);

TagSelectOption.isTagSelectOption = true;

class TagSelect extends Component {
  static propTypes = {
    actionsText: PropTypes.object,
    hideCheckAll: PropTypes.bool,
  };

  static defaultProps = {
    hideCheckAll: false,
    actionsText: {
      expandText: '展开',
      collapseText: '收起',
      selectAllText: '全部',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      expand: props.expand,
      value: props.value || props.defaultValue || [],
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return { value: nextProps.value || [] };
    }
    return null;
  }

  onChange = (value) => {
    const { onChange } = this.props;
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (onChange) {
      onChange(value);
    }
  };

  onSelectAll = (checked) => {
    let checkedTags = [];
    if (checked) {
      checkedTags = this.getAllTags();
    }
    this.onChange(checkedTags);
  };

  getAllTags() {
    let { children } = this.props;
    children = React.Children.toArray(children);
    const checkedTags = children
      .filter((child) => this.isTagSelectOption(child))
      .map((child) => child.props.value);
    return checkedTags || [];
  }

  handleTagChange = (value, checked) => {
    const { value: StateValue } = this.state;
    const checkedTags = [...StateValue];

    const index = checkedTags.indexOf(value);
    if (checked && index === -1) {
      checkedTags.push(value);
    } else if (!checked && index > -1) {
      checkedTags.splice(index, 1);
    }
    this.onChange(checkedTags);
  };

  handleExpand = () => {
    const { expand } = this.state;
    this.setState({
      expand: !expand,
    });
  };

  isTagSelectOption = (node) =>
    node &&
    node.type &&
    (node.type.isTagSelectOption ||
      node.type.displayName === 'TagSelectOption');

  render() {
    const { value, expand } = this.state;
    const {
      children,
      hideCheckAll,
      className,
      style,
      expandable,
      actionsText,
    } = this.props;
    const checkedAll = this.getAllTags().length === value.length;
    const {
      expandText = '展开',
      collapseText = '收起',
      selectAllText = '全部',
    } = actionsText === null ? {} : actionsText;

    const cls = classNames('tagSelect', className, {
      hasExpandTag: expandable,
      expanded: expand,
    });

    return (
      <div className={cls} style={style}>
        {hideCheckAll ? null : (
          <CheckableTag
            checked={checkedAll}
            key='tag-select-__all__'
            onChange={this.onSelectAll}
          >
            {selectAllText}
          </CheckableTag>
        )}
        {value &&
          React.Children.map(children, (child) => {
            if (this.isTagSelectOption(child)) {
              return React.cloneElement(child, {
                key: `tag-select-${child.props.value}`,
                value: child.props.value,
                checked: value.indexOf(child.props.value) > -1,
                onChange: this.handleTagChange,
              });
            }
            return child;
          })}
        {expandable && (
          <a className={'trigger'} onClick={this.handleExpand}>
            {expand ? collapseText : expandText}
            {expand ? (
              <UpOutlined className='expand_icon' />
            ) : (
              <DownOutlined className='expand_icon' />
            )}
          </a>
        )}
      </div>
    );
  }
}

TagSelect.Option = TagSelectOption;

export default TagSelect;
