import TagSelect from '@/components/TagSelect';
import React from 'react';

export default function index() {
  function handleFormSubmit() {}
  return (
    <div style={{ padding: '24px' }}>
      <TagSelect onChange={handleFormSubmit} expandable>
        <TagSelect.Option value='cat1'>类目一</TagSelect.Option>
        <TagSelect.Option value='cat2'>类目二</TagSelect.Option>
        <TagSelect.Option value='cat3'>类目三</TagSelect.Option>
        <TagSelect.Option value='cat4'>类目四</TagSelect.Option>
        <TagSelect.Option value='cat5'>类目五</TagSelect.Option>
        <TagSelect.Option value='cat6'>类目六</TagSelect.Option>
        <TagSelect.Option value='cat7'>类目七</TagSelect.Option>
        <TagSelect.Option value='cat8'>类目八</TagSelect.Option>
        <TagSelect.Option value='cat9'>类目九</TagSelect.Option>
        <TagSelect.Option value='cat10'>类目十</TagSelect.Option>
        <TagSelect.Option value='cat11'>类目十一</TagSelect.Option>
        <TagSelect.Option value='cat12'>类目十二</TagSelect.Option>
        <TagSelect.Option value='cat11'>类目一</TagSelect.Option>
        <TagSelect.Option value='cat21'>类目二</TagSelect.Option>
        <TagSelect.Option value='cat31'>类目三</TagSelect.Option>
        <TagSelect.Option value='cat41'>类目四</TagSelect.Option>
        <TagSelect.Option value='cat51'>类目五</TagSelect.Option>
        <TagSelect.Option value='cat61'>类目六</TagSelect.Option>
        <TagSelect.Option value='cat71'>类目七</TagSelect.Option>
        <TagSelect.Option value='cat81'>类目八</TagSelect.Option>
        <TagSelect.Option value='cat91'>类目九</TagSelect.Option>
        <TagSelect.Option value='cat101'>类目十</TagSelect.Option>
        <TagSelect.Option value='cat111'>类目十一</TagSelect.Option>
        <TagSelect.Option value='cat121'>类目十二</TagSelect.Option>
      </TagSelect>
    </div>
  );
}
