---
title: app.fact.ist / Bitcoin
hide_title: true
---

```btc
select
    Date as date,
    Open as open,
    High as high,
    Low as low,
    Close as close,
    CASE WHEN Date = (SELECT MAX(Date) FROM csv.btc) THEN 1 ELSE 0 END AS is_max_date

from csv.btc
```

<BigValue
  title="Close Price on Last Date"
  data={btc.filter(item => item.is_max_date === 1)} 
  value=close
  sparkline=date
/>

<LineChart 
    data={btc}  
    x=date 
    y=close
    chartAreaHeight=600
/>