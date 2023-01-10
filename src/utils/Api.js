class Api {
  #onResponce(res){
    if (res.ok) {
      return res.json();
    }
  return Promise.reject({message: 'Ошибка на стороне сервера', res})
  }

  constructor(config){
    this._url = config.url;
    this._headers = config.headers;
  }

// Добавить карточку
addCard(data){
  return this._request(`${this._url}/cards`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify(data)
  })
}

// Забрать с сервера все карточки
  getAllCards(){
    return this._request(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
  }

// Удалить карточку
  removeCard(cardId){
    return this._request(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

// Забрать с сервера инфо юзера
  getUsersInfo() {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
  }

// Редактирование информации о пользователе через попап
  setUserInfo(data) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
  }

// Редактирование информации об аватаре пользователя через попап
  editUserAvatar(data) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
  }

// Редактирование постановки лайка
  changeLikeCardStatus(cardId, isLiked){
    return this._request(`${this._url}/cards/${cardId}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this._headers,
    })
  }

// Проверяем успешность запроса на сервер
  _request(url, options) {
    return fetch(url, options).then(this.#onResponce)
  }
}

const apiConfig = {
  url: 'https://nomoreparties.co/v1/cohort-54',
  headers: {
    'Content-Type': 'application/json',
      authorization: '7ad4b367-9863-4a09-9138-d86794effb54'
  }
}

const api = new Api(apiConfig);

export default api