const html = function () {
    return `<div class="card">
        <div class="card__heart">
            <ion-icon name="heart" class="card__heart--icon"></ion-icon>
        </div>
        <div class="card__content">
            <ul class="card__iconList">
                <li>
                    <ion-icon name="star" class="card__icon"></ion-icon>
                </li>
                <li>
                    <ion-icon name="star" class="card__icon"></ion-icon>
                </li>
                <li>
                    <ion-icon name="star" class="card__icon"></ion-icon>
                </li>
                <li>
                    <ion-icon name="star" class="card__icon"></ion-icon>
                </li>
                <li>
                    <ion-icon name="star-outline" class="card__icon"></ion-icon>
                </li>
                <li>
                    <span> 420 reviews</span>
                </li>
            </ul>
            <div class="card__text">
                <h1 class="card__text--name">The Blue House</h1>
                <p class="card__text--city">Burano, Venice, Italy</p>
                <p class="card__text--price">$250 per night</p>
                <ion-icon name="arrow-forward-circle" class="card__icon--forward"></ion-icon>
            </div>
        </div>
    </div>`
}

const container = document.querySelector('.container');
for (let i = 0; i < 4; i++) {
    container.insertAdjacentHTML('beforeend', html())
}
