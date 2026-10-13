import Swal from 'sweetalert2'

export const MySwal = Swal.mixin({
  customClass: {
    container: 'swal-on-top',
  },
  didOpen: () => {
    const container = document.querySelector('.swal2-container')
    if (container) document.body.appendChild(container)
  },
})
