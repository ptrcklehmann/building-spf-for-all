import React from 'react'

export default function pillarCard(props) {
    return (
        <div class="card rounded shadow-sm border-0">
                <div class="card-body p-4"><img src={props.image} alt={props.title} class="img-fluid d-block mx-auto mb-3">
                    <h5> <a href="#" class="text-dark">{props.title}</a></h5>
                    <p class="small text-muted font-italic">{props.text}</p>
                </div>
            </div>
        </div>
    )
}
