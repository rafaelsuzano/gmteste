from flask import Flask, request, jsonify
import re
import uuid

app = Flask(__name__)
usuarios = []

# Função para validar senha
def validar_senha(senha):
    if len(senha) < 6 or not re.search("[A-Za-z]", senha) or not re.search("[0-9]", senha) or senha in ["12345", "password", "qwerty"]:
        return False
    return True

# Função para verificar se email ou login já existem
def verificar_duplicidade(email, login):
    for usuario in usuarios:
        if usuario["email"] == email:
            return "O e-mail já está cadastrado."
        if usuario["login"] == login:
            return "O login já está cadastrado."
    return None

@app.route('/cadastrar', methods=['POST'])
def cadastrar_usuario():
    dados = request.json
    
    # Validações
    if not all(key in dados for key in ["nome", "login", "senha", "email", "confirmacao_email"]):
        return jsonify({"erro": "Todos os campos são obrigatórios."}), 400
    
    if dados['email'] != dados['confirmacao_email']:
        return jsonify({"erro": "Os e-mails não coincidem."}), 400
    
    if not validar_senha(dados['senha']):
        return jsonify({"erro": "A senha deve ter pelo menos 6 caracteres, incluindo letras e números, e não pode ser fraca."}), 400
    
    erro_duplicidade = verificar_duplicidade(dados["email"], dados["login"])
    if erro_duplicidade:
        return jsonify({"erro": erro_duplicidade}), 400
    
    usuario = {
        "id": str(uuid.uuid4()),
        "nome": dados["nome"],
        "login": dados["login"],
        "email": dados["email"]
    }
    usuarios.append(usuario)
    return jsonify({"mensagem": "Usuário cadastrado com sucesso!", "usuario": usuario}), 201

@app.route('/usuarios', methods=['GET'])
def listar_usuarios():
    return jsonify(usuarios)

if __name__ == '__main__':
    app.run(debug=True)
