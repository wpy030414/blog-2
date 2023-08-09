/** 收藏 */
export interface Collection {
  /** 名称 */
  name: string;
  /** 副标题 */
  subtitle: Date;
  /** 描述 */
  description: string;
  /** 图片 */
  picture: {
    url: string;
  };
}
