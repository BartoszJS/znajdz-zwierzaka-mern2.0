edit and update buttons
wrappers job

 <footer>
          <div className='actions'>
            <Link
              to='/dodaj-zwierze'
              className='btn edit-btn'
              onClick={() => setEditAnimal(_id)}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteAnimal(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
