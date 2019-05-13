import { ApiModelProperty } from '@nestjs/swagger';

export class SomeItem {

  @ApiModelProperty({ description: '活动id' })
  readonly id: string;

  @ApiModelProperty({ description: '创建时间' })
  readonly created_at: string;

  @ApiModelProperty({ description: '更新时间' })
  readonly updated_at: string;

  @ApiModelProperty({ description: '创建者id 默认为-1系统' })
  readonly creator: number;

  @ApiModelProperty({ description: '更新者id' })
  readonly revisor: number;

  @ApiModelProperty({ description: 'ActivityType.id 活动类型id' })
  readonly activity_type_id: string;

  @ApiModelProperty({ description: '活动名称' })
  readonly name: string;

  @ApiModelProperty({ description: '活动开始日期' })
  readonly begin_date: string;

  @ApiModelProperty({ description: '活动结束日期' })
  readonly end_date: string;

  @ApiModelProperty({ description: '活动状态' })
  readonly status: string;

  @ApiModelProperty({ description: '是否已指派' })
  readonly is_assigned: boolean;

  @ApiModelProperty({ description: '是否被删除' })
  readonly is_deleted: boolean;

}
