export function searchArticles(params, done, fail, always) {
  $.ajax({
    type: "post",
    url: "/Flight/article/list",
    dataType: "json",
    data: params,
  }).done(function (jsonResult) {    
    done(jsonResult)
  }).fail(function (jqXHR, textStatus, errorThrown) {
    fail(jqXHR.status, jqXHR.statusText)
  }).always(function () {
    always()
  })
}

export function createArticle(params, done, fail, always) {
  $.ajax({
    type: "post",
    url: "/Flight/article/new",
    dataType: "json",
    data: params,
  }).done(function (jsonResult) {    
    done(jsonResult)
  }).fail(function (jqXHR, textStatus, errorThrown) {
    fail(jqXHR.status, jqXHR.statusText)
  }).always(function () {
    always()
  })
}

export function updateArticle(params, done, fail, always) {
  $.ajax({
    type: "post",
    url: "/Flight/article/update",
    dataType: "json",
    data: params,
  }).done(function (jsonResult) {    
    done(jsonResult)
  }).fail(function (jqXHR, textStatus, errorThrown) {
    fail(jqXHR.status, jqXHR.statusText)
  }).always(function () {
    always()
  })
}

export function refreshArticle(id, done, fail, always) {
  $.ajax({
    type: "post",
    url: "/Flight/article/" + id,
    dataType: "json",
  }).done(function (jsonResult) {    
    done(jsonResult)
  }).fail(function (jqXHR, textStatus, errorThrown) {
    fail(jqXHR.status, jqXHR.statusText)
  }).always(function () {
    always()
  })
}

export function deleteArticle(id, done, fail, always) {
  $.ajax({
    type: "post",
    url: "/Flight/article/" + id + '/delete',
    dataType: "json",
  }).done(function (jsonResult) {    
    done(jsonResult)
  }).fail(function (jqXHR, textStatus, errorThrown) {
    fail(jqXHR.status, jqXHR.statusText)
  }).always(function () {
    always()
  })
}