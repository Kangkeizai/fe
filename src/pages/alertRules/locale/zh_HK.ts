const zh_HK = {
  title: '告警規則',
  search_placeholder: '搜尋名稱或標籤',
  prod: '監控型別',
  severity: '級別',
  notify_groups: '告警接收組',
  basic_configs: '基礎配置',
  name: '規則名稱',
  name_severities_appendtags: '名称 & 級別 & 附加標籤',
  append_tags: '附加標籤',
  append_tags_msg: '標籤格式不正確，請檢查！',
  append_tags_msg1: '標籤長度應小於等於 64 位',
  append_tags_msg2: '標籤格式應為 key=value。且 key 以字母或下劃線開頭，由字母、數字和下劃線組成。',
  append_tags_placeholder: '標籤格式為 key=value ，使用回車或空格分隔',
  note: '備註',
  rule_configs: '規則配置',
  inhibit: '級別抑制',
  interval: '執行頻率',
  duration: '持續時長',
  severity_label: '觸發告警',
  prom_eval_interval: '執行頻率 (s)',
  prom_for_duration: '持續時長 (s)',
  effective_configs: '生效配置',
  enable_status: '立即啟用',
  effective_time: '生效時間',
  effective_time_start: '開始時間',
  effective_time_start_msg: '開始時間不能為空',
  effective_time_end: '結束時間',
  effective_time_end_msg: '結束時間不能為空',
  effective_time_week_msg: '請選擇生效週期',
  enable_in_bg: '僅在本業務組生效',
  enable_in_bg_tip: '根據告警事件中的 ident 歸屬關係判斷',
  notify_configs: '通知配置',
  notify_channels: '通知媒介',
  notify_recovered: '啟用恢復通知',
  notify_recovered_tip: '告警恢復時也傳送通知',
  recover_duration: '留觀時長（秒）',
  recover_duration_tip: '持續 {{num}} 秒沒有再次觸發閾值才傳送恢復通知',
  notify_repeat_step: '重複通知間隔（分鐘）',
  notify_repeat_step_tip: '如果告警持續未恢復，間隔 {{num}} 分鐘之後重複提醒告警接收組的成員',
  notify_max_number: '最大發送次數',
  notify_max_number_tip: '如果值為 0，則不做最大發送次數的限制',
  callbacks: '回撥地址',
  annotations: '附加資訊',
  annotationsOptions: {
    plan_link: '預案連結',
    dashboard_link: '儀表盤連結',
    desc: '描述',
  },
  host: {
    query: {
      title: '機器篩選',
      key: {
        all_hosts: '全部機器',
        datasource_ids: '資料來源',
        group_ids: '業務組',
        tags: '標籤',
        hosts: '機器標識',
      },
      preview: '機器預覽',
    },
    trigger: {
      title: '告警條件',
      key: {
        target_miss: '機器失聯',
        pct_target_miss: '機器叢集失聯',
        offset: '機器時間偏移',
      },
      than: '超過',
      pct_target_miss_text: '秒，失聯比例超過',
      second: '秒',
      millisecond: '毫秒',
    },
    prom_eval_interval_tip: 'promql 執行頻率，每隔 {{num}} 秒查詢時序庫，查到的結果重新命名寫回時序庫',
    prom_for_duration_tip:
      '通常持續時長大於執行頻率，在持續時長內按照執行頻率多次執行 PromQL 查詢，每次都觸發才生成告警；如果持續時長置為 0，表示只要有一次 PromQL 查詢觸發閾值，就生成告警',
  },
  metric: {
    query: {
      title: '告警條件',
    },
    prom_eval_interval_tip: 'promql 執行頻率，每隔 {{num}} 秒查詢時序庫，查到的結果重新命名寫回時序庫',
    prom_for_duration_tip:
      '通常持續時長大於執行頻率，在持續時長內按照執行頻率多次執行 PromQL 查詢，每次都觸發才生成告警；如果持續時長置為 0，表示只要有一次 PromQL 查詢觸發閾值，就生成告警',
  },
  batch: {
    not_select: '請先選擇策略',
    delete: '刪除告警規則',
    delete_confirm: '確認刪除選中的告警規則嗎？',
    delete_success: '刪除成功',
    import: {
      title: '匯入告警規則',
      name: '告警規則',
      result: '匯入結果',
      errmsg: '錯誤資訊',
    },
    export: {
      title: '匯出告警規則',
      copy: '複製 JSON 內容到剪貼簿',
    },
    update: {
      title: '更新告警規則',
      name: '批量更新',
      field: '欄位',
      changeto: '改為',
      enable_in_bg_tip: '根據告警事件中的 ident 歸屬關係判斷',
      callback_cover: {
        mode: '模式',
        cover: '覆蓋',
        callback_add: '新增',
        callback_del: '刪除',
      },
      effective_time_msg: '生效時間不能為空',
      effective_time_add: '新增生效時間',
      options: {
        datasource_ids: '資料來源',
        severity: '告警級別',
        prom_eval_interval: '執行頻率',
        prom_for_duration: '持續時長',
        disabled: '啟用',
        effective_time: '生效時間',
        enable_in_bg: '僅在本業務組生效',
        append_tags: '附加標籤',
        notify_channels: '通知媒介',
        notify_groups: '告警接收組',
        notify_recovered: '啟用恢復通知',
        notify_repeat_step: '重複傳送頻率',
        recover_duration: '留觀時長',
        notify_max_number: '最大發送次數',
        callbacks: '回撥地址',
        note: '備註',
        runbook_url: '預案連結',
      },
    },
  },
};

export default zh_HK;
