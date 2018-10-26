const initialState = {
  scrollId: null,
  isScrollable: true,
  query: '',
  memeses: [{"url":"http://9gag.com/gag/amBLQdv","permalink":"http://9gag.com/gag/amBLQdv","title":"Ah, yes. The negotiator","likes":11,"published":"2018-10-26T11:37:17+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/amBLQdv_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"amBLQdv","originalType":"Photo","commentsCount":0,"tags":["star wars","prequel memes","funny"],"id":"2jrHlLLR9WXLAF3cVsptdGUmH00="},{"url":"http://9gag.com/gag/amBLy09","permalink":"http://9gag.com/gag/amBLy09","title":"Ah yes.. a 2018 marriage","likes":13,"published":"2018-10-26T05:23:28+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/amBLy09_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"amBLy09","originalType":"Photo","commentsCount":11,"tags":["whamen"],"id":"5m1mvzDCmvau0YBtP2i9+CF8hFI="},{"url":"http://9gag.com/gag/az9Lv7m","permalink":"http://9gag.com/gag/az9Lv7m","title":"*Sigh* Yes, I&rsquo;m a team player too.","likes":43,"published":"2018-10-25T23:40:23+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/az9Lv7m_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"az9Lv7m","originalType":"Photo","commentsCount":0,"tags":["hide the pain harold"],"id":"pVX3FDmVRk/AkXad1xcmKZWj6BU="},{"url":"http://9gag.com/gag/a73KPex","permalink":"http://9gag.com/gag/a73KPex","title":"And she even say &quot;yes master&quot;. Capcom knows the deal","likes":42,"published":"2018-10-25T21:36:18+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/a73KPex_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"a73KPex","originalType":"Photo","commentsCount":9,"tags":["old","game","replay"],"id":"niKg1ZUs3IZ7lFMjYbXdjLA+58w="},{"url":"http://9gag.com/gag/aYYpdM0","permalink":"http://9gag.com/gag/aYYpdM0","title":"Yes,This is not fake news.","likes":147,"published":"2018-10-25T15:33:09+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/aYYpdM0_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"aYYpdM0","originalType":"Photo","commentsCount":26,"tags":["diwali","india","gift"],"id":"qMdxh8xihJEF5fW/oUIbEaQITTU="},{"url":"http://9gag.com/gag/apmowz9","permalink":"http://9gag.com/gag/apmowz9","title":"Ah yes, the classic face swap","likes":14,"published":"2018-10-26T15:00:26+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/apmowz9_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"apmowz9","originalType":"Photo","commentsCount":0,"tags":["Airplane"],"id":"KD1rqAiE4IeQqux1qqAk0FjvYWY="},{"url":"http://9gag.com/gag/a5MNgPL","permalink":"http://9gag.com/gag/a5MNgPL","title":"Battlefield 1 is 5 dollars right now and the seasonpass is free until the 31. (And yes you can keep the seasonpass forever)","likes":228,"published":"2018-10-26T09:38:17+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/a5MNgPL_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"a5MNgPL","originalType":"Photo","commentsCount":48,"tags":["bf1","massive saving","orgin","Apocalypse"],"id":"AhPO9CS4GggSeqCudfbA8owTfAI="},{"url":"http://9gag.com/gag/aoeZqgw","permalink":"http://9gag.com/gag/aoeZqgw","title":"&quot;Yes.. that&#039;s what &#039;killing you&#039; means&quot;","likes":15,"published":"2018-10-25T18:02:29+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/aoeZqgw_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"aoeZqgw","originalType":"Photo","commentsCount":0,"tags":["Marvel"],"id":"vsg89t3SWyoaC4EvR63S+LlYRK8="},{"url":"http://9gag.com/gag/a1QZj92","permalink":"http://9gag.com/gag/a1QZj92","title":"YES YES *PETS CAT* YES HARDER","likes":4,"published":"2018-10-26T15:32:37+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/a1QZj92_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"a1QZj92","originalType":"Photo","commentsCount":0,"tags":[],"id":"SkM6v02PyF+U/u0MRhRmxByF+L8="},{"url":"http://9gag.com/gag/aOYy50y","permalink":"http://9gag.com/gag/aOYy50y","title":"Porngrind ( yes that&#039;s a real genre )","likes":6,"published":"2018-10-26T13:38:15+00:00","collected":null,"media":[{"url":"https://img-9gag-fun.9cache.com/photo/aOYy50y_700b.jpg","type":null,"width":0,"height":0}],"source":"9gag.com","originalId":"aOYy50y","originalType":"Photo","commentsCount":8,"tags":[],"id":"UmTMDiBTNdg1FFfRhMU2qzKXIpQ="}]
};

export default function memesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MEMESES':
      return {
        scrollId: action.scrollId,
        memeses: [ ...state.memeses, ...action.memeses ],
        isScrollable: !!action.scrollId,
        query: action.query
      };
    case 'ADD_MEMESES':
      return {
        scrollId: action.scrollId,
        memeses: [...action.memeses],
        isScrollable: !!action.scrollId,
        query: action.query
      };
    default:
      return state;
  }
}
