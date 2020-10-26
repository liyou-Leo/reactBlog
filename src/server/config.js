import Service from "./server"

export function getBlogListService() {
  return Service({
    url: 'admin/getBlogList',
    method: 'get'
  })
}

export function getBlogListTitleService(type) {
  return Service({
    url: 'admin/getBlogListTitle?type='+ type,
    method: 'get'
  })
}

export function getTheBlogService(id) {
  return Service({
    url: 'admin/getTheBlog?id=' + id,
    method: 'get'
  })
}

export function getTypeBlogService(type) {
  return Service({
    url: 'admin/getTypeBlog?type=' + type,
    method: 'get'
  })
}


export function updateArticleService(data) {
  return Service({
    url: 'admin/updateArticle',
    method: 'post',
    data:data
  })

}

