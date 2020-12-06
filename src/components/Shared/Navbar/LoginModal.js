import React from 'react';

const LoginModal = () => {
    return (
        <div class="modal fade " id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                            </li>
                        </ul>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Lorem ipsum Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non enim, adipisci iure sint, accusantium iusto nobis rem consectetur esse omnis nihil rerum accusamus aliquid impedit. Nobis, corporis. Illum, animi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae commodi pariatur aspernatur voluptas similique ullam cum dolorem omnis et nobis. Omnis, repudiandae odio quaerat doloribus et soluta dolores autem aliquid? dolor sit amet consectetur adipisicing elit. Quo error rerum, non dolorem unde vel voluptates harum, totam autem nisi maxime repellendus. Non, distinctio vitae laudantium quo labore dolor rerum!</div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam animi explicabo similique quae incidunt, reprehenderit et facilis nobis, est neque corrupti inventore totam. Quis magni voluptate esse animi fugiat!</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginModal;