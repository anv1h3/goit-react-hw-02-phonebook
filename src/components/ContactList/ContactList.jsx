
export const ContactList = ({ contactsList, handleDelete })=>{
     return <div>
        <ul>
          {contactsList.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                onClick={() => handleDelete(contact.id)}
                style={{
                  marginLeft: 5,
                      }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    }