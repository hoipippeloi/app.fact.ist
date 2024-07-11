
```sql feed
SELECT
    *,
    'rgb(' ||
    CAST(CEIL(200 * RANDOM()) AS INTEGER) || ',' ||
    CAST(CEIL(200 * RANDOM()) AS INTEGER) || ',' ||
    CAST(CEIL(200 * RANDOM()) AS INTEGER) ||
    ')' AS rgb_color
FROM
    csv.feed_facts
```

<div class="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: pack">
    {#each feed as item}
    <div>
        <div class="uk-card uk-card-default" style="padding:10px;">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 style="color:{item.rgb_color} !important;text-transform: uppercase; font-size: 1.2em !important;" class="uk-card-title uk-margin-remove-bottom">
                            {item.tags}
                        </h3>
                        <p class="uk-text-meta uk-margin-remove-top"><time datetime="{item.date}">{item.date}</time></p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>{item.interesting_fact}</p>
            </div>
        </div>
    </div>
    {/each}
</div>

<style>
.uk-card > div {
    padding:20px;
}
.uk-card > div.uk-card-header {
    padding:10px 20px;
}
</style>