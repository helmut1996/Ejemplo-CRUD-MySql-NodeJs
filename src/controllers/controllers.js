const controller ={};
controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM personal',(err, rows)=>{
        if(err){
            res.json(err);
        }
        res.render('customers',{
            data: rows
        });
        });
    });
    };

    controller.save = (req,res)=>{
        const data =req.body;
req.getConnection((err,conn)=>{
    conn.query('INSERT INTO personal set ?',[data],(err,customers)=>{
        res.redirect('/');
    })
})
    };

    controller.edit = (req,res)=>{
        const { id } = req.params;
        req.getConnection((err,conn)=>{
            conn.query('SELECT * FROM personal WHERE id=?',[id], (err,customers)=>{
                res.render('costumers_Edit',{
                    data: customers[0]
                })
            })
        })
    };

    controller.update=(req,res)=>{
        const { id } = req.params;
        const newCostumer = req.body;
        req.getConnection((err,conn)=>{
            conn.query('UPDATE personal set ? WHERE id=?',[newCostumer,id],(err,rows)=>{
                res.redirect('/');
            });
        });
    };

    controller.delate = (req,res)=>{
  const { id } = req.params;
  req.getConnection((err,conn)=>{
      conn.query('DELETE FROM personal WHERE id =?',[id],(err,rows)=>{
        res.redirect('/');
      })
  })
    };
    module.exports = controller;